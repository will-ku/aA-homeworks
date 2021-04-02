class Stack
  attr_reader :stacky

    def initialize
        @stacky = Array.new
      # create ivar to store stack here!
    end

    def push(el)
        @stacky.push(el)
      # adds an element to the stack
    end

    def pop
        @stacky.pop
      # removes one element from the stack
    end

    def peek
        @stacky.first
      # returns, but doesn't remove, the top element in the stack
    end
  end
