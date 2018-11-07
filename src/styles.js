export const

container = {
	width: '100%'
},

input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	border: 'none',
	borderRadius: '25px',
	width: '100%',
	height: '22px',
	padding: '12px 0px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
	textIndent: '25px',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
},

inputFocus = Object.assign( {}, input, {
	boxShadow: `0px 0px 10px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.06), 
	0px 0px 30px 0px rgba(48,62,77,0.04), 0px 0px 40px 0px rgba(48,62,77,0.02)`
})