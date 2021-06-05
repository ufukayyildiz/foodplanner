import {
  Flex,
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
  Fade,
} from '@chakra-ui/react'
import { Selection } from 'core/utils'
import { Food } from 'core/types'

type Props = {
  selection: Selection<Food>
}

function SelectedFoods({ selection }: Props) {
  const { selectedItems: selectedFoods } = selection

  function onFoodUnselect(food: Food) {
    selection.onToggleItem(food)
  }

  return (
    <>
      {selectedFoods.length > 0 ? (
        <Flex mx={-1} flexWrap="wrap">
          {selectedFoods.map(food => (
            <Fade key={food.id} in={true}>
              <Tag size="md" borderRadius="full" variant="outline" m={1}>
                <TagLabel>{food.name}</TagLabel>
                <TagCloseButton onClick={() => onFoodUnselect(food)} />
              </Tag>
            </Fade>
          ))}
        </Flex>
      ) : (
        <Flex height={8} alignItems="center">
          <Text textColor="gray.400">No foods selected</Text>
        </Flex>
      )}
    </>
  )
}

export default SelectedFoods