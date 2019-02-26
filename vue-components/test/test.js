var assert = require('assert')
var loginForm = require('../components/loginForm')

describe('login()', function () {
  var vm
  beforeEach(function () {
    vm = new loginForm().$mount()
  })
  // userid,passwordのそれぞれの初期値を確認
  it('check initial values', function () {
    assert.equal(vm.userid, '')
    assert.equal(vm.password, '')
  })

  //login() メソッドの返り値をテスト
  it('check returned value - login()', function () {
    vm.userid = 'testuser'
    vm.password = 'password'
    var result = vm.login()
    assert.deepEqual(result,{userid:'testuser',password:'password'})
  })
})
