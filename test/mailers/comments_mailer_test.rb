require "test_helper"

class CommentsMailerTest < ActionMailer::TestCase
  test "submitted" do
    mail = CommentsMailer.submitted comments(:one)
    assert_equal "New comment!", mail.subject
    assert_equal [ "vazquez.juan.1fm@gmail.com" ], mail.to
    assert_equal [ "from@example.com" ], mail.from
    assert_match "You got a new comment on", mail.body.encoded
  end
end
