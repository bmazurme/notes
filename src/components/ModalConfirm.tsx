import { Button, Modal, Text } from '@gravity-ui/uikit';

function ModalConfirm({ openAsk, setOpenAsk }
  : { openAsk: boolean; setOpenAsk: (isDark: boolean) => void }) {
  return (
    <Modal open={openAsk} onClose={() => setOpenAsk(false)}>
      <div className="modal">
        <Text variant="subheader-3">Title: some text</Text>
        <div></div>
        <div className="modal__actions">
          <Button
            view="action"
            size="s"
            onClick={() => setOpenAsk(false)}
          >
            No
          </Button>
          <Button
            size="s"
          >
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalConfirm;
