export const timeFormatter = (number) => {
	const minutes = (~~(number/60))
	const seconds = (~~(number%60))
	return `${addLeftZero(minutes)}:${addLeftZero(seconds)}` 
}

const addLeftZero = (number) => {
	const pad = `0${number}`
	return pad.substring(pad.length-2, pad.length)
}