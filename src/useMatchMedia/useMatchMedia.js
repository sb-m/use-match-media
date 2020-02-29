import { useEffect, useState } from 'react'

const useMatchMedia = mediaQueryString => {
	const [match, setMatch] = useState()

	useEffect(() => {
		const handleMatchMedia = mediaQueryList => setMatch(mediaQueryList.matches)

		const mediaQueryList = window.matchMedia(mediaQueryString)
		
		mediaQueryList.addListener(handleMatchMedia)
		handleMatchMedia(mediaQueryList)

		return () => {
			mediaQueryList.removeListener(handleMatchMedia)
		}
	}, [mediaQueryString])

	return match
}

export default useMatchMedia
