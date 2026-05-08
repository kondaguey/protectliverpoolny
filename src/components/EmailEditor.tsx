"use client";

import { useEffect, useCallback } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import {
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  SELECTION_CHANGE_COMMAND,
  EditorState,
  LexicalEditor,
} from "lexical";
import {
  $isHeadingNode,
} from "@lexical/rich-text";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  $isListNode,
} from "@lexical/list";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $getNearestNodeOfType } from "@lexical/utils";
import { $isAtNodeEnd, $patchStyleText, $getSelectionStyleValueForProperty } from "@lexical/selection";
import { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Link2,
  Unlink,
  Quote,
  Type,
  Minus,
} from "lucide-react";

/* ────────── Helper: get selected node ────────── */
function getSelectedNode(selection: any) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) return anchorNode;
  const isBackward = selection.isBackward();
  return isBackward
    ? $isAtNodeEnd(focus)
      ? anchorNode
      : focusNode
    : $isAtNodeEnd(anchor)
      ? focusNode
      : anchorNode;
}

/* ────────── Toolbar Component ────────── */
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [blockType, setBlockType] = useState("paragraph");
  const [fontSize, setFontSize] = useState("normal");

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));

      // Detect font size
      const currentFontSize = $getSelectionStyleValueForProperty(selection, "font-size", "");
      if (currentFontSize === "12px") setFontSize("small");
      else if (currentFontSize === "18px") setFontSize("large");
      else setFontSize("normal");

      const node = getSelectedNode(selection);
      const parent = node.getParent();
      setIsLink($isLinkNode(parent) || $isLinkNode(node));

      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList
            ? parentList.getListType()
            : element.getListType();
          setBlockType(type === "number" ? "ol" : "ul");
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
        }
      }
    }
  }, [editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        updateToolbar();
        return false;
      },
      COMMAND_PRIORITY_LOW
    );
  }, [editor, updateToolbar]);

  const insertLink = useCallback(() => {
    if (!isLink) {
      const url = prompt("Enter URL:");
      if (url) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
      }
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  const btn = (
    active: boolean,
    onClick: () => void,
    icon: React.ReactNode,
    title: string
  ) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded-lg transition-all ${
        active
          ? "bg-danger-600 text-white"
          : "text-dark-400 hover:text-dark-200 hover:bg-dark-700/50"
      }`}
    >
      {icon}
    </button>
  );

  const sep = () => (
    <div className="w-px h-5 bg-dark-700/50 mx-0.5" />
  );

  return (
    <div className="flex items-center gap-0.5 flex-wrap px-3 py-2 border-b border-dark-700/50 bg-dark-850/50">
      {btn(isBold, () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold"), <Bold className="w-4 h-4" />, "Bold (Ctrl+B)")}
      {btn(isItalic, () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic"), <Italic className="w-4 h-4" />, "Italic (Ctrl+I)")}
      {btn(isUnderline, () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"), <Underline className="w-4 h-4" />, "Underline (Ctrl+U)")}
      {btn(isStrikethrough, () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough"), <Strikethrough className="w-4 h-4" />, "Strikethrough")}

      {sep()}

      {btn(blockType === "h1", () => {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const { $setBlocksType } = require("@lexical/selection");
            if (blockType !== "h1") {
              const { $createHeadingNode } = require("@lexical/rich-text");
              $setBlocksType(selection, () => $createHeadingNode("h1"));
            } else {
              const { $createParagraphNode } = require("lexical");
              $setBlocksType(selection, () => $createParagraphNode());
            }
          }
        });
      }, <Heading1 className="w-4 h-4" />, "Heading 1")}

      {btn(blockType === "h2", () => {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const { $setBlocksType } = require("@lexical/selection");
            if (blockType !== "h2") {
              const { $createHeadingNode } = require("@lexical/rich-text");
              $setBlocksType(selection, () => $createHeadingNode("h2"));
            } else {
              const { $createParagraphNode } = require("lexical");
              $setBlocksType(selection, () => $createParagraphNode());
            }
          }
        });
      }, <Heading2 className="w-4 h-4" />, "Heading 2")}

      {btn(blockType === "quote", () => {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const { $setBlocksType } = require("@lexical/selection");
            if (blockType !== "quote") {
              const { $createQuoteNode } = require("@lexical/rich-text");
              $setBlocksType(selection, () => $createQuoteNode());
            } else {
              const { $createParagraphNode } = require("lexical");
              $setBlocksType(selection, () => $createParagraphNode());
            }
          }
        });
      }, <Quote className="w-4 h-4" />, "Quote")}

      {sep()}

      {btn(blockType === "ul", () => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined), <List className="w-4 h-4" />, "Bullet List")}
      {btn(blockType === "ol", () => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined), <ListOrdered className="w-4 h-4" />, "Numbered List")}

      {sep()}

      {btn(isLink, insertLink, isLink ? <Unlink className="w-4 h-4" /> : <Link2 className="w-4 h-4" />, isLink ? "Remove Link" : "Insert Link")}

      {sep()}

      {/* Font Size */}
      <div className="flex items-center gap-0.5 bg-dark-800/60 rounded-lg p-0.5">
        <button
          type="button"
          title="Small text"
          onClick={() => {
            editor.update(() => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) {
                $patchStyleText(selection, { "font-size": fontSize === "small" ? "" : "12px" });
              }
            });
          }}
          className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
            fontSize === "small"
              ? "bg-danger-600 text-white"
              : "text-dark-500 hover:text-dark-300"
          }`}
        >
          S
        </button>
        <button
          type="button"
          title="Normal text"
          onClick={() => {
            editor.update(() => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) {
                $patchStyleText(selection, { "font-size": "" });
              }
            });
          }}
          className={`px-1.5 py-0.5 rounded text-xs font-bold transition-all ${
            fontSize === "normal"
              ? "bg-danger-600 text-white"
              : "text-dark-500 hover:text-dark-300"
          }`}
        >
          N
        </button>
        <button
          type="button"
          title="Large text"
          onClick={() => {
            editor.update(() => {
              const selection = $getSelection();
              if ($isRangeSelection(selection)) {
                $patchStyleText(selection, { "font-size": fontSize === "large" ? "" : "18px" });
              }
            });
          }}
          className={`px-1.5 py-0.5 rounded text-sm font-bold transition-all ${
            fontSize === "large"
              ? "bg-danger-600 text-white"
              : "text-dark-500 hover:text-dark-300"
          }`}
        >
          L
        </button>
      </div>

      {sep()}

      <div className="flex items-center gap-1 ml-auto">
        <Type className="w-3 h-3 text-dark-500" />
        <span className="text-[10px] text-dark-500 font-mono">
          {"{firstName}"}
        </span>
      </div>
    </div>
  );
}

/* ────────── HTML Export Plugin ────────── */
function HtmlExportPlugin({
  onHtmlChange,
}: {
  onHtmlChange: (html: string) => void;
}) {
  const [editor] = useLexicalComposerContext();

  const onChange = useCallback(
    (_editorState: EditorState, editor: LexicalEditor) => {
      editor.update(() => {
        const html = $generateHtmlFromNodes(editor, null);
        onHtmlChange(html);
      });
    },
    [onHtmlChange]
  );

  return <OnChangePlugin onChange={onChange} />;
}

/* ────────── Theme ────────── */
const editorTheme = {
  paragraph: "mb-2 text-dark-200 leading-relaxed",
  text: {
    bold: "font-bold text-white",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
  },
  heading: {
    h1: "text-xl font-bold text-white mb-3 mt-4",
    h2: "text-lg font-bold text-white mb-2 mt-3",
  },
  list: {
    ul: "list-disc ml-6 mb-2 text-dark-200",
    ol: "list-decimal ml-6 mb-2 text-dark-200",
    listitem: "mb-1",
    nested: {
      listitem: "ml-4",
    },
  },
  link: "text-danger-400 underline cursor-pointer hover:text-danger-300",
  quote:
    "border-l-4 border-danger-600/50 pl-4 italic text-dark-400 my-3",
};

/* ────────── Main Export ────────── */
export default function EmailEditor({
  onHtmlChange,
}: {
  onHtmlChange: (html: string) => void;
}) {
  const initialConfig = {
    namespace: "PLNYEmailEditor",
    theme: editorTheme,
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode, AutoLinkNode],
    onError: (error: Error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-danger-500/50 focus-within:border-danger-500 transition-all">
        <ToolbarPlugin />
        <div className="relative min-h-[240px] max-h-[400px] overflow-y-auto">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="px-4 py-3 outline-none text-sm min-h-[240px]" />
            }
            placeholder={
              <div className="absolute top-3 left-4 text-dark-500 text-sm pointer-events-none">
                Hi {"{firstName}"},<br /><br />
                Start composing your email...
              </div>
            }
            ErrorBoundary={({ children }) => <>{children}</>}
          />
        </div>
        <HistoryPlugin />
        <ListPlugin />
        <LinkPlugin />
        <HtmlExportPlugin onHtmlChange={onHtmlChange} />
      </div>
    </LexicalComposer>
  );
}
