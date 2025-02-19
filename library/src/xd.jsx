/* eslint-disable react/jsx-key */
import {
  FileText,
  FolderPlus,
  Hash,
  Tag,
  CodeXml,
  Settings,
  Users,
  BarChart,
  Image,
  Music,
  AppWindowMac,
  Paperclip,
} from "lucide-react";

export let DockOption = {
  Apps: [
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <Users size={18} />, label: "Contacts" },
    { icon: <BarChart size={18} />, label: "Analytics" },
  ],
  Components: [
    { icon: <FileText size={18} />, label: "New Document", shortcut: "⌘N" },
    { icon: <FolderPlus size={18} />, label: "New Folder", shortcut: "⌘F" },
    { icon: <Hash size={18} />, label: "Add Hashtag", shortcut: "⌘H" },
    { icon: <Tag size={18} />, label: "Add Label", shortcut: "⌘L" },
    { icon: <Image size={18} />, label: "Insert Image", shortcut: "⌘I" },
    { icon: <FileText size={18} />, label: "Export as PDF", shortcut: "⌘E" },
  ],
  Notes: [{ icon: <Music size={18} />, label: "Music Library" }],
};
export let DockItems = ["Apps", "Components", "Notes"];

export let icons = [
  <CodeXml size={18} />,
  <AppWindowMac size={18} />,
  <Paperclip size={18} />,
];
