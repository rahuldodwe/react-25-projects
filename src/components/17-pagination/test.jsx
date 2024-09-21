import { useState } from "react";
import Pagination from ".";

export default function PaginationTest() {

    const dummyData = Array.from({length : 100}, (_,index)=> ({
        id : index + 1,
        name : `Product ${index + 1}`
    }));
    
    // console.log(dummyData)

    const itemsPerPage = 10;
    const [currentPage, setcurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentListOfItems)

    return(
        <div>
            <Pagination/>
        </div>
    )
}