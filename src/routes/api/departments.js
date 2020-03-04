const {DepartmentController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(DepartmentController.fetch)
        .post(DepartmentController.create)
    router.route('/id')
        .put(DepartmentController.save)
        .delete(DepartmentController.delete);

    return router;
};
