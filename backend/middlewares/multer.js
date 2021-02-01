import multer from "multer";
import path from "path";
import { v4 } from "uuid";
import fs from "fs/promises";

export const UPLOAD_DIRECTORY = "./consumerPhotos";

const checkIfDirectoryExists = async () => {
  try {
    await fs.stat(UPLOAD_DIRECTORY);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.mkdir(UPLOAD_DIRECTORY);
    }
  }
};

const storage = multer.diskStorage({
  async destination(req, file, callback) {
      //console.log(file)
    try {
      await checkIfDirectoryExists();
     // console.log(file, "multer file")
      callback(null, UPLOAD_DIRECTORY);
    } catch (err) {
      callback(err);
    }
  },

  async filename(req, file, callback) {
    const fileExtension = path.extname(file.originalname);
    const fileName = `${v4()}${fileExtension}`;
   // console.log(fileName, "filename")
    callback(null, fileName);
  },
});

export const uploader = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
});

export const getUploadedFiles = async () => {
  return await fs.readdir(UPLOAD_DIRECTORY);
};

export const findUploadedFile = async (fileName) => {
  const info = await fs.stat(path.resolve(UPLOAD_DIRECTORY, fileName));
  console.log({ info });
  return info;
};
