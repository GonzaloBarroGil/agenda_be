const {ContactController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ContactController.fetch)
        .post(ContactController.create)
    router.route('/:id')
        .put(ContactController.save)
        .delete(ContactController.delete)
        .get(ContactController.fetchOne);

    return router;
};
