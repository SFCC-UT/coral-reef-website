import { useState } from "react";

export default function BubbleButton({ top, left, title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen(true)}
        className="
        absolute rounded-full bg-info hover:bg-blue-500
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-48 lg:h-48
        flex items-center justify-center text-white
        text-xs sm:text-xs md:text-sm lg:text-xl
        shadow-lg transition transform hover:scale-110
        overflow-hidden p-4 text-center
        "
        style={{ top: top, left: left}}
        title={title}
      >
        <span className="wrap-break-word">{title}</span>
      </button>

      {/* Modal */}
      <input type="checkbox" id={title} className="modal-toggle" checked={open} readOnly />
      <div className="modal">
        <div className="modal-box relative max-w-4xl">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="py-4 whitespace-pre-line">{description}</p>
          <div className="modal-action">
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}