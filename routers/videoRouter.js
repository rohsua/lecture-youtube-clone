import express from "express";
import {
  videos,
  upload,
  videosDetail,
  editVideo,
  deleteVideo,
} from "../controller/videoController";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videosDetail, videosDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
