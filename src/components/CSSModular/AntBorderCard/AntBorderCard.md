@keyframes ants{
	to{
		background-position: 100%;
	}
}
.antMove{
  padding: 1em;
	border: 1em solid transparent;
	background: linear-gradient(white, white) padding-box,
	repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #58a 0, #58a 37.5%, transparent 0, transparent 50%) 0 / 4em 4em;
	animation: ants 6s linear infinite;
}