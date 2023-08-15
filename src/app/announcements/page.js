import AnnouncementPreview from '@components/AnnouncementPreview'

const fetchAnnouncements = async () => {
  try {
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30'); // TODO - change sample endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const AnnouncementsPage = async() => {
  const { blogs } = await fetchAnnouncements();
  return (
    <>
      {blogs.map((announcement,  index) => <AnnouncementPreview key={index} announcement={announcement}></AnnouncementPreview>)}
    </>
  )
}

export default AnnouncementsPage