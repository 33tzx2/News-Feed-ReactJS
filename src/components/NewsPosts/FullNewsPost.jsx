import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  height: '700px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto'
};

export default function FullNewsPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} style={{border: 'none'}} className="btn btn-dark">Read more</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{textAlign: 'center'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Название новости 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            <ul>
          <li><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Little_tootie.JPG/200px-Little_tootie.JPG'/></li>
          <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat deserunt numquam fugit nesciunt repellat porro quibusdam. Autem accusantium voluptas porro iusto nostrum vero quae, et molestias nisi? Voluptates, accusantium?
          Cumque nulla hic illum iure, laboriosam magni suscipit, possimus pariatur quia beatae qui nemo recusandae? Similique quod saepe officia doloremque laborum exercitationem qui natus alias! Repellendus, iste? Quos, omnis est.
          Maiores exercitationem quis recusandae nisi! Fugiat aspernatur rem quaerat vel odit sed numquam veritatis, consequuntur pariatur cupiditate optio quae ea reiciendis accusantium fugit, accusamus unde quis doloribus. Quis, fugiat quam.
          Voluptates repellendus aspernatur, provident voluptatibus voluptate earum. Repellendus quia aperiam deleniti deserunt quis delectus est. Exercitationem libero dignissimos et iusto eligendi, quas asperiores necessitatibus atque sed illum! Laboriosam, rem eveniet.
          Eos dolorem quisquam mollitia, porro nam reprehenderit doloribus, a repellat odio natus sint ex illo dolore qui praesentium quia! Fugiat animi modi reiciendis atque laboriosam, suscipit praesentium vel eveniet mollitia!
          Illo obcaecati, nemo id itaque fugiat assumenda! Adipisci magni numquam corporis dolorem itaque, hic odit ut velit, ipsa esse cum veniam distinctio doloribus iste, praesentium non vero enim excepturi? Quod.
          Odio ipsa natus voluptates minima maxime, in doloribus alias ut non repellat, dignissimos porro excepturi corporis numquam tenetur nisi beatae hic quod et minus tempora. Neque ullam dignissimos cumque deserunt.
          Quia vero saepe enim! Facilis consectetur consequuntur quasi aperiam in consequatur, cum odit? Cupiditate unde sapiente soluta. Delectus, possimus voluptates pariatur, autem odio excepturi praesentium eum vero exercitationem quos beatae!
          Placeat labore eos quis quod laborum perferendis aperiam recusandae quibusdam ea illo distinctio officia at dicta, eligendi consequuntur error voluptas quam quaerat excepturi assumenda sit veritatis blanditiis. Id, fugit ad?
          Nemo labore obcaecati maiores nostrum ratione alias beatae molestiae ad doloremque eum reprehenderit minus qui nulla sunt deleniti quis repellat eveniet at eaque, laboriosam ducimus explicabo. Repellendus harum officia ipsa.
          Voluptate mollitia repellat aspernatur deleniti obcaecati ea ratione iste molestiae temporibus error magnam eos quisquam cum eveniet quibusdam, rem magni suscipit alias a. Repudiandae dolore consequatur suscipit nisi eveniet fugiat.
          Unde neque tenetur molestias impedit ex dignissimos natus ratione recusandae, id aspernatur inventore sit sapiente, nesciunt asperiores ut dicta deleniti omnis maiores mollitia, beatae quasi! Omnis totam similique doloribus est?
          Facilis veniam quod iste adipisci, saepe ipsum ducimus! Placeat voluptatem iure eveniet blanditiis, obcaecati consectetur harum illum incidunt quibusdam, iusto dicta fugiat delectus similique odit id voluptatibus, fuga distinctio quo.
          Distinctio accusamus fuga beatae quaerat ipsam ratione ipsum eum commodi dicta, officia dignissimos iure vel possimus! Impedit quaerat optio cumque iusto excepturi totam ab rerum distinctio voluptatem explicabo, in facere.
          Sint magni dolores repellendus libero fuga autem itaque aspernatur perferendis, sed ad sunt provident nihil corporis vitae, dicta molestiae a sit iure. Ipsum repudiandae itaque voluptates autem nihil accusantium tempora!
          Odit quod, quo autem dolor magnam nostrum necessitatibus animi eius itaque perferendis nam amet molestiae et sequi, repellendus maxime voluptatem? Aspernatur odio quis eaque eum quae odit eveniet similique cupiditate?
          Officiis, itaque rerum iste voluptatum et pariatur! Voluptatum consequatur quia rerum, excepturi natus quasi esse impedit molestiae. Aut quasi quas dignissimos odit, soluta, dicta culpa asperiores, quidem qui vero doloribus?
          Eaque sunt tempora fuga, ea tenetur at! Explicabo, quaerat quia porro alias ullam repellendus! Blanditiis adipisci provident exercitationem enim, reiciendis facilis rerum ipsa dicta autem aliquam, corporis obcaecati, rem explicabo!
          Rerum repellendus pariatur doloribus corrupti praesentium velit placeat quod temporibus assumenda voluptates saepe commodi, magni non omnis quisquam cum amet aliquid reiciendis odio vitae iusto quis voluptatem ea. Odit, temporibus?
          Fugiat consequatur est quam expedita, sapiente quasi atque, dicta nam quo, minima similique libero asperiores possimus temporibus nisi maxime voluptate assumenda animi eos sed voluptatem deleniti? Earum nisi quo consequatur.
          Optio voluptate quo nam tempore, cumque consectetur dicta sit iusto odio ab sint mollitia excepturi ipsa cupiditate animi quae explicabo nostrum fugiat dolorum praesentium id molestias laborum assumenda nemo. Minus.
          Porro doloribus, quo dolorum sed laboriosam iusto reprehenderit distinctio sint, ipsam accusantium aliquid eveniet sequi similique voluptas nisi vitae veniam consectetur. Soluta esse velit autem iusto modi corrupti temporibus ipsam?
          Autem aliquid eum sapiente voluptatem expedita provident fuga dolore cumque, deleniti aut beatae officia architecto qui dolorem alias eos rerum omnis iusto adipisci aliquam consectetur explicabo. Deserunt quasi adipisci totam.
          Earum facilis debitis laboriosam nemo blanditiis quibusdam harum tempore numquam provident dolore. Ipsum quis aliquam molestias ratione ad vitae consectetur nesciunt fugit reprehenderit perferendis, reiciendis nihil, voluptates porro commodi culpa!
          Dolorum, doloremque illo voluptate consectetur, totam officiis hic, architecto quod atque iusto perferendis dolore quos tempore. In repellat, ducimus nulla iure provident explicabo quo enim vitae perferendis at! Nulla, iure?</p></li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
