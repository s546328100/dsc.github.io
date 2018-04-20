function JsonDate () {};

JsonDate.prototype.catalogues = [
    {
        "title": "异步编程",
        "createTime": 1524204828,
        "abstract": "异步编程",
        "next": "What is Node",
    },
    {
        "title": "What is Node",
        "createTime": 1524204828,
        "abstract": "What is Node",
        "prev": "异步编程",
        "next": "Promise对象"
    },
    {
        "title": "Promise对象",
        "createTime": 1524204828,
        "abstract": "Promise对象",
        "prev": "What is Node",
    }
];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(index) {
    return this.catalogues[index];
};