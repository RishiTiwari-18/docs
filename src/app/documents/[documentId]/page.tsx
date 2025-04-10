import Editor from "./editor";

interface DocumentPageProps {
  params: {
    documentId: string;
  };
}

const DocumentPage = async ({ params }: DocumentPageProps) => {
  const { documentId } = await params;
  return <div className="min-h-screen bg-[#fafbfd]">
    <Editor/>
  </div>;
};

export default DocumentPage;
