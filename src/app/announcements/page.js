import AnnouncementPreview from '@components/AnnouncementPreview'
import { requestAndParse } from '@utils/requestUtils'

const fetchAnnouncements = () => {
  return fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=30') // TODO - change sample endpoint
}

const getAnnouncements = async () => {
  try {
    const result = await requestAndParse(fetchAnnouncements, 'blogs')
    console.log('RESULT', result)
    return result
  } catch (error) {
    throw new Error(error)
  }
}


const AnnouncementsPage = async() => {
  const data = await getAnnouncements()
  console.log('DATA', data)
  return (
    <>
      {data.map((announcement,  index) => <AnnouncementPreview key={index} announcement={announcement}></AnnouncementPreview>)}
    </>
  )
}

export default AnnouncementsPage