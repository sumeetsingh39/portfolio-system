import React, { useState, useEffect } from "react";
import { Command } from "cmdk";

// Simple VisuallyHidden component for accessibility
const VisuallyHidden = ({ children }) => (
  <span
    style={{
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
    }}
  >
    {children}
  </span>
);

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[640px] bg-[#0d0d0d] border border-[#333] shadow-2xl rounded-lg p-2 z-[9999] font-mono"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
    >
      {/* ACCESSIBILITY FIX: 
        Some versions of cmdk/radix require a visible title for screen readers.
        We provide it here but hide it visually.
      */}
      <VisuallyHidden>
        <h2>Global Command Menu</h2>
      </VisuallyHidden>

      <div className="flex items-center border-b border-[#333] px-3 pb-2 mb-2">
        <span className="text-[#ff4d00] mr-2 text-lg">›</span>
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className="w-full bg-transparent text-[#eee] placeholder-[#666] outline-none text-sm h-8"
        />
      </div>

      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden px-1">
        <Command.Empty className="text-[#666] text-xs p-4 text-center">
          NO_RESULTS_FOUND
        </Command.Empty>

        <Command.Group
          heading="NAVIGATION"
          className="text-[#666] text-[10px] mb-2 px-2 tracking-widest"
        >
          <Command.Item
            onSelect={() => {
              window.location.href = "/";
              setOpen(false);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[#eee] text-sm rounded cursor-pointer hover:bg-[#ff4d00] hover:text-black transition-colors aria-selected:bg-[#ff4d00] aria-selected:text-black"
          >
            <span>01_ABOUT</span>
          </Command.Item>
          <Command.Item
            onSelect={() => {
              window.location.href = "/projects";
              setOpen(false);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[#eee] text-sm rounded cursor-pointer hover:bg-[#ff4d00] hover:text-black transition-colors aria-selected:bg-[#ff4d00] aria-selected:text-black"
          >
            <span>02_PROJECTS</span>
          </Command.Item>
          <Command.Item
            onSelect={() => {
              window.location.href = "/blog";
              setOpen(false);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[#eee] text-sm rounded cursor-pointer hover:bg-[#ff4d00] hover:text-black transition-colors aria-selected:bg-[#ff4d00] aria-selected:text-black"
          >
            <span>03_LOGS</span>
          </Command.Item>
        </Command.Group>

        <Command.Group
          heading="SYSTEM"
          className="text-[#666] text-[10px] mb-2 px-2 tracking-widest mt-4"
        >
          <Command.Item
            onSelect={() => {
              const html = document.documentElement;
              if (html.getAttribute("data-theme") === "dark") {
                html.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
              } else {
                html.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
              }
              setOpen(false);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[#eee] text-sm rounded cursor-pointer hover:bg-[#ff4d00] hover:text-black transition-colors aria-selected:bg-[#ff4d00] aria-selected:text-black"
          >
            <span>TOGGLE_THEME</span>
          </Command.Item>
          <Command.Item
            onSelect={() => {
              window.open("/resume.pdf", "_blank");
              setOpen(false);
            }}
            className="flex items-center gap-2 px-2 py-2 text-[#eee] text-sm rounded cursor-pointer hover:bg-[#ff4d00] hover:text-black transition-colors aria-selected:bg-[#ff4d00] aria-selected:text-black"
          >
            <span>DOWNLOAD_CV</span>
          </Command.Item>
        </Command.Group>
      </Command.List>

      <div className="border-t border-[#333] mt-2 pt-2 flex justify-between px-2 text-[10px] text-[#666]">
        <span>ESC_TO_CLOSE</span>
        <span>ENTER_TO_SELECT</span>
      </div>
    </Command.Dialog>
  );
}
