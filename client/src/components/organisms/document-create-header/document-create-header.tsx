import Logo from "@/components/atoms/logo";
import DocumentSearchBar from "@/components/atoms/document-searchbar";
import UserDropDown from "@/components/atoms/user-dropdown";

const DocumentCreateHeader = () => {
    return (
        <div className="w-full px-3 py-1 flex justify-between items-center">
            <Logo />
            <DocumentSearchBar />
            <UserDropDown />
        </div>
    );
};

export default DocumentCreateHeader;