import { useEffect, useState } from 'react'

const useMatchMedia = mediaQueryString => {
	const MediaQueryList = window.matchMedia(mediaQueryString)
	const [match, setMatch] = useState(MediaQueryList.matches)

	useEffect(() => {
		const handleMatchChange = MediaQueryList => setMatch(MediaQueryList.matches)

		MediaQueryList.addListener(handleMatchChange)

		return () => MediaQueryList.removeListener(handleMatchChange)
	})

	return match
}

export default useMatchMedia
