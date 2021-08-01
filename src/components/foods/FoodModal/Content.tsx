import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  HStack,
} from '@chakra-ui/react'
import { Food } from 'core/types'
import { useSubmitFoodForm } from 'core/foods'
import FoodFields from './FoodFields'
import { RefObject } from 'react'
import { useOneTimeCheckActions } from 'general/oneTimeCheck'

type Props = {
  onClose: () => void
  title: string
  nameInputRef: RefObject<HTMLInputElement>
  food?: Food
  canEdit: boolean
  onFoodCreated: (food: Food) => void
}

function Content({
  onClose,
  nameInputRef,
  title,
  food,
  canEdit,
  onFoodCreated,
}: Props) {
  const { onSubmit } = useSubmitFoodForm({
    onComplete: (food: Food) => {
      onFoodCreated(food)
      onClose()
    },
  })

  return (
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <form onSubmit={onSubmit}>
          <FoodFields nameInputRef={nameInputRef} canEdit={canEdit} />
        </form>
      </ModalBody>

      <ModalFooter>
        <HStack spacing={3}>
          <Button onClick={onClose}>Close</Button>
          {canEdit && (
            <Button
              colorScheme="teal"
              type="submit"
              variant="solid"
              onClick={onSubmit}
            >
              Save
            </Button>
          )}
        </HStack>
      </ModalFooter>
    </ModalContent>
  )
}

export type { Props }

export default Content