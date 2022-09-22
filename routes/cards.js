const router = require('express').Router();
const { getAllCards, deleteCard, createCard,
  likeCard, dislikeCard } = require('../controllers/cards');

router.get('/', getAllCards);
router.delete('/:cardId', deleteCard);
router.post('/', createCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;