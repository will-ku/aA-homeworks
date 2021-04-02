class Queue
    attr_reader :kwee

    def initialize
        @kwee = Array.new
    end

    def enqueue(el)
        kwee.unshift(el)
    end

    def dequeue
        kwee.pop
    end

    def peek
        kwee.first
    end

end