import { useState } from "react";

export default function BubbleButton({ top, left, title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen(true)}
        className="absolute rounded-full bg-blue-400 hover:bg-blue-500 w-12 h-12 flex items-center justify-center text-white shadow-lg transition transform hover:scale-110"
        style={{ top: top, left: left }}
      >
        ?
      </button>

      {/* Modal */}
      <input type="checkbox" id={title} className="modal-toggle" checked={open} readOnly />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}