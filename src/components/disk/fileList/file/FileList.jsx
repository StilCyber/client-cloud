import React from "react";
import "./fileList.css";
import { useSelector } from "react-redux";
import File from "./File.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const FileList = () => {
  const files = useSelector((state) => state.files.files);
  const fileView = useSelector((state) => state.files.view);

  if (files.length === 0) {
    return <div>Not found</div>;
  }

  if (fileView === "plate") {
    return (
      <div className="fileplate">
        {files.map((file) => (
          <File file={file} key={file._id} />
        ))}
      </div>
    );
  }

  if (fileView === "list") {
    return (
      <div className="filelist">
        <div className="filelist__header">
          <div className="filelist__name">Название</div>
          <div className="filelist__date">Дата</div>
          <div className="filelist__size">Размер</div>
        </div>
        <TransitionGroup>
          {files.map((file) => (
            <CSSTransition
              key={file._id}
              timeout={500}
              classNames={"file"}
              exit={false}
            >
              <File file={file} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
};

export default FileList;
