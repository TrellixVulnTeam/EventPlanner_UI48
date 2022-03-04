package math

import "testing"

func TestLogin(t *testing.T){

    got := Login(4, 6)
    want := 10

    if got != want {
        t.Errorf("got %q, wanted %q", got, want)
    }
}

func TestSignup(t *testing.T){

    got := Login(4, 6)
    want := 10

    if got != want {
        t.Errorf("got %q, wanted %q", got, want)
    }
}

func TestUser(t *testing.T){

    got := Login(4, 6)
    want := 10

    if got != want {
        t.Errorf("got %q, wanted %q", got, want)
    }
}

func TestEvent(t *testing.T){

    got := Login(4, 6)
    want := 11

    if got != want {
        t.Errorf("No records found.")
    }
}

func TestTicket(t *testing.T){

    got := Login(4, 6)
    want := 10

    if got != want {
        t.Errorf("got %q, wanted %q", got, want)
    }
}