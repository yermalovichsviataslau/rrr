function InputPractice() {
  return (
    <>
      <input
        onChange={(event) => console.log(event.target.value)}
        onFocus={() => console.log('Поле получило фокус')}
        onBlur={() => console.log('Поле потеряло фокус')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('Нажат Enter')
          }
        }}
      />
    </>
  )
}

export default InputPractice
