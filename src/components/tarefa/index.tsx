import { Button, Input } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"
import TaskItem from "../taskItem";

interface Props {
    name: String
}


function Task({name}: Props){
    return (
        <>
        <Grid className='grid'
            templateAreas={`"title title title"
                            "insert done add"
                            "line line line"
                            "task1 task1 task1"
                            "task2 task2 task2"
                            "task3 task3 task3"`}
            gridTemplateColumns={'1fr max-content max-content'}
            gridTemplateRows={'40x 10px 5px 40px 40px 40px'}
            alignItems='center'
            gap={2}
            minHeight={'max-content'}
            padding={2}
            width={'600px'}
            >
                <GridItem area={'title'} fontSize={24} borderBottom='2px solid gray'>
                    {name}
                </GridItem>
                <GridItem area={'insert'} >
                    <Input placeholder="Digite o título da task" />
                </GridItem>
                <GridItem area={'done'} >
                    <Checkbox>
                    Realizada?
                    </Checkbox>  
                </GridItem>
                <GridItem area={'add'}>
                    <Button backgroundColor={'lightblue'}>
                        Inserir
                    </Button>
                </GridItem>
                <GridItem area={'line'} borderBottom='2px solid gray'/>
                <GridItem area={'task1'} border-radius='25px'>
                    <TaskItem name={'tarefa 1'} />
                </GridItem>
                <GridItem area={'task2'}>
                    <TaskItem name={'tarefa 2'} />
                </GridItem>
                <GridItem area={'task3'}>
                    <TaskItem name={'tarefa 3'} />
                </GridItem>
            </Grid>
            
        </>
    
    )
}

export default Task


/*function Task(){
    return(
        <Checkbox defaultChecked>Realizada?</Checkbox>
    )
}*/