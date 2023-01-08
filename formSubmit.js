class BlogData{
    constructor(fname,lname,title,content){
        this.fname = fname;
        this.lname = lname;
        this.title = title;
        this.content = content;
    }
}
All_Data = new Array();    
function submitData(){

    alert("Thank you for submitting a blog. We will review it and upload it")
    
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let title = document.forms["myForm"]["title"].value;
    let content = document.forms["myForm"]["content"].value;
    
    

    const obj = new BlogData(fname,lname,title,content);
   
    All_Data.push(obj);
    console.log(All_Data);
   
   document.forms["myForm"]["fname"].value='';
  document.forms["myForm"]["lname"].value='';
     document.forms["myForm"]["title"].value='';
    document.forms["myForm"]["content"].value='';
    
    return false;

}