using SDVXCore.Types.Draw;

namespace SDVXCore.Interfaces.Managers
{
    public interface IDrawManager
    {
        DrawResponse Draw(DrawRequest req);
    }
}
