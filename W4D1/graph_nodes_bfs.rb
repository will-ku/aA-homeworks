
class GraphNode

    attr_accessor :value, :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end
end

#     def add_neighbor(node)
#     neighbors << node
#   end


def bfs(starting_node, target_value)
    queue = [starting_node]
    visited = Set.new()

    until queue.length == 0
        current_node = queue.shift
        until visited.include?(current_node)
            return current_node.value if current_node.value == target_value
            visited.add(current_node)
            queue += current_node.neighbors
        end
    end
    return nil
end
