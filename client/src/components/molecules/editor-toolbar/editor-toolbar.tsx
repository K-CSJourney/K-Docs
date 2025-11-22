import {useContext} from "react";
import {EditorContext} from "@/contexts/editor-context";
import {EditorState} from "draft-js";
import IconButton from "@/components/atoms/icon-button";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/outline";
import FontSelect from "@/components/atoms/font-select";

const EditorToolbar = () => {
    const {editorState, setEditorState} = useContext(EditorContext);

    const handleUndoBtnClick = () => {
        setEditorState(EditorState.undo(editorState));
    };

    const handleRedoBtnClick = () => {
        setEditorState(EditorState.redo(editorState));
    };

    return (
        <div className="w-full h-9 px-3 py-1 flex-shrink-0 flex items-center">
            <IconButton
                onClick={handleUndoBtnClick}
                icon={<ArrowLeftIcon className="h-4 w-4"/>}
                tooltip="Undo"
            />
            <IconButton
                onClick={handleRedoBtnClick}
                icon={<ArrowRightIcon className="h-4 w-4"/>}
                tooltip="Redo"
            />
            <div className="h-5 border-1 border-1-gray-300 mx-2"></div>
            <FontSelect/>
        </div>
    );
};

export default EditorToolbar;