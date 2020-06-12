export const ConvertNumber=(numbers)=>{
    if(numbers>1000 && numbers<999999){
        return numbers.toString().split("").slice(0,-3).join("")+" тис";

}
    else if(numbers>1000000){
        return numbers.toString().split("").slice(0,-6).join("")+" млн";
    }
}
