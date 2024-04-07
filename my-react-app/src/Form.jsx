 
function Form (){
  return(
    <form action="">
      <label htmlFor="TextInput">Text Input: </label>
      <input type="text" id = "textInput" required />
      <label htmlFor="FileInput">File input: </label>
      <input type="file" id = "formFile" required />
     <button type="submit">Submit</button>
    </form>
    
  );
}

export default Form