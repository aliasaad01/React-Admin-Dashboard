import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { Header } from "../components";

const Editor = ({ data = "" }) => {
  const editor = useEditor({
    content: data,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
  });

  if (!editor) return null;

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg dark:text-gray-200">
      <Header category="App" title="Editor" />

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4 border p-2 rounded-lg">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </button>

        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          U
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          S
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </button>

        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          &gt;
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          {"</>"}
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          ⬅
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          ⬌
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          ➡
        </button>

        <button
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
        >
          Clear
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="border rounded-lg p-4 min-h-[400px]"
      />
    </div>
  );
};

export default Editor;
