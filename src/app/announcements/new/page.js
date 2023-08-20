import AnnouncementForm from "@components/AnnoucementForm";
import { ProtectedRoute } from "@utils/ProtectedRoute";

const NewAnnouncementsPage = async () => {
    return (
        <ProtectedRoute>
            <AnnouncementForm />
        </ProtectedRoute>
    )
}

export default NewAnnouncementsPage;