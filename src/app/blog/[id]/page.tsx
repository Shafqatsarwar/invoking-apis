import React from "react";

function BlogDetail ({params, searchParams}:any){
    const searchParams2= new URLSearchParams(searchParams);
    console.log("🚀 ~ Blog ~ searchParams:", searchParams);
    console.log("🚀 ~ Blog ~ searchParams2:", searchParams2.get("q"));
    console.log("🚀 ~ Blog ~ params:", params);
    return<div>BlogDetail ${params.id}</div>;
}
export default BlogDetail;