class BaseController {
  async index(req, res) {
    return res.render("index.html")
  }
}

module.exports = new BaseController();