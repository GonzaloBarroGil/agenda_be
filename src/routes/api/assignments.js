const {AssignmentController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(AssignmentController.fetch)
        .post(AssignmentController.create);
    router.route('/:id')
        .put(AssignmentController.save)
        .delete(AssignmentController.delete)
        .get(AssignmentController.fetchOne);

    return router;
};
