import LineDark from "../LineDark/LineDark";



export default function Contacts() {
   
  return (

    <div className="d-flex flex-column justify-content-start align-items-center p-5 ">
         <h1 className="text-center  p-3  fw-bolder">
           Contact Section
         </h1>
         <LineDark />

         <div className="row w-50 container">
          <div className="col-12">
<form className="form-floating">
  <input type="text" className="form-control border-0 border-bottom" id="floatingInputInvalid" placeholder="UserName" />
  <label htmlFor="floatingInputInvalid">User Name</label>
</form>
<form className="form-floating mt-3">
  <input type="text" className="form-control border-0 border-bottom" id="floatingInputInvalid1" placeholder="UserAge" />
  <label htmlFor="floatingInputInvalid1">User Age</label>
</form>
<form className="form-floating mt-3">
  <input type="email" className="form-control border-0 border-bottom" id="floatingInputInvalid2" placeholder="UserEmail" />
  <label htmlFor="floatingInputInvalid2">User Email</label>
</form>
<form className="form-floating mt-3">
  <input type="password" className="form-control border-0 border-bottom" id="floatingInputInvalid3" placeholder="UserPassword" />
  <label htmlFor="floatingInputInvalid3">User Password</label>

</form>
<button type="submit" className="btn  btn-success px-3 mt-3 submit">Submit</button>


          </div>
         </div>
    </div>
    
  );
}