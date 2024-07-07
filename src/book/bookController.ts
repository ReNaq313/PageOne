import path from "node:path";
import { Request, Response, NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import createHttpError from "http-errors";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
   console.log("files", req.files);

   const files = req.files as { [fieldname: string]: Express.Multer.File[] };
   //mimetype: image/jpeg -> at(-1) -> jpeg
   const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);
   const fileName = files.coverImage[0].filename;
   const filePath = path.resolve(
      __dirname,
      "../../public/data/uploads",
      fileName
   );

   try {
      const uploadResult = await cloudinary.uploader.upload(filePath, {
         filename_override: fileName,
         folder: "book-covers",
         format: coverImageMimeType,
      });

      const bookFileName = files.file[0].filename;
      const bookFilePath = path.resolve(
         __dirname,
         "../../public/data/uploads",
         bookFileName
      );

      const bookFileUploadResult = await cloudinary.uploader.upload(
         bookFilePath,
         {
            resource_type: "raw",
            filename_override: bookFileName,
            folder: "book-pdfs",
            format: "pdf",
         }
      );

      console.log("book file upload result", bookFileUploadResult);
      console.log("upload result", uploadResult);

      res.json({});
   } catch (err) {
      console.log(err);
      return next(createHttpError(500, "Error while uploading the files."));
   }
};

export { createBook };
