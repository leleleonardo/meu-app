import { Grid, GridItem } from "@chakra-ui/react"
import ButtonFatec from "../button-fatec"

interface Props {
    name: String
}

function TaskItem({name}: Props) {
    return (
        <>
            <Grid className='grid' 
            templateColumns='1fr 120px 120px'
            templateRows='max-content' 
            gap={1}
            padding={2} 
            backgroundColor='lightgray'
            alignItems='center'
            minHeight={'max-content'}
            borderRadius='10px'
            >
                <GridItem colSpan={1} rowSpan={1} >
                    {name}
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} >
                    <ButtonFatec type={"button"} label={"Pendente"} />
                </GridItem>
                <GridItem colSpan={1} rowSpan={1}>
                    <ButtonFatec type={"button"} label={"Excluir"} />
                </GridItem>    
            </Grid>
        </>
    )
}

export default TaskItem