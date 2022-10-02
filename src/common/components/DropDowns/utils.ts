export const stopDropDownPropagation = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => { 
    e.stopPropagation()
}