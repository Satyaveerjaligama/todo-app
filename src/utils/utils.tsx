import { monthsList } from "./contants";

export const convertDateToDisplay = (date: string) => {
    const dateList: string[] = date.split("-");
    return dateList?.length > 2 ? `${dateList[0]} ${monthsList[Number(dateList[1])-1]} ${dateList[2]}` : "";
}

export const capitalizeWord = (word: string) => {
    return word.charAt(0).toUpperCase()+word.slice(1);
}