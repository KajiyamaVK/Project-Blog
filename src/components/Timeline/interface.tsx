/*
    isCurrent: Parâmetro indica o local no tempo que estamos. Se for o current, a bolinha vai ficar piscando. 
    image: Uma foto que vai ser colocada na linha dfo tempo
    index: As descrições variam entre posições. É necessario saber os indexes para organizar os lados certos.
*/

export default interface Props{
    isCurrent? : boolean,
    image:string,
    index: number
}