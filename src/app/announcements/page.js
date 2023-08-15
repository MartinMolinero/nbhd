import AnnouncementPreview from '@components/AnnouncementPreview'

const fetchAnnouncements = async () => {
  const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30'); // TODO - change sample endpoint
  const data = await response.json();
  return data;
}

const getAnnouncements = async () => {
  try {
    const result = await fetchAnnouncements();
    return result;
  } catch (error) {
    throw new Error(error)
  }
}


const AnnouncementsPage = async() => {
  const { blogs } = await getAnnouncements();
  return (
    <>
      {blogs.map((announcement,  index) => <AnnouncementPreview key={index} announcement={announcement}></AnnouncementPreview>)}
    </>
  )
}

export default AnnouncementsPage