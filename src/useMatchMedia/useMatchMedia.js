import { useEffect, useState } from 'react'

const useMatchMedia = mediaQueryString => {
	const [ match, setMatch ] = useState()

	const handleMatchMediaEvent = useCallback(mediaQueryList => {
		setMatch(mediaQueryList.matches)
	}, [])

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQueryString)
		mediaQueryList.addListener(handleMatchMediaEvent)
		handleMatchMediaEvent(mediaQueryList)
		return () => mediaQueryList.removeListener(handleMatchMediaEvent)
	}, [mediaQueryString])

	return match
}

export default useMatchMedia
